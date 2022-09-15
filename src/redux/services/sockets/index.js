import { io } from "socket.io-client";
const base_url = "ws://localhost:4000/";

export default class SocketAPI {
    constructor(userid, dispatch, navigate, snackbar) {
        this.socket = null;
        this.type = "user";
        this.userid = userid;
        this.isConnected = false;
        this.dispatch = dispatch;
        this.navigate = navigate;
        this.snackbar = snackbar;
    }
    
    connect = () => {
        return new Promise((resolve, reject) => {
            this.socket = io(base_url, {
                query: {
                    type: this.type,
                    userid: this.userid
                },
                transports: ["websocket"],
            });

            // Connection callback
            this.socket.on("connect", () => {
                console.log("Socket connected");
                this.isConnected = this.status();
                
                resolve(true);
            });

            // Connection error
            this.socket.on("connect_error", (error) => {
                console.log("Socket connection error", error);
                this.isConnected = this.status();
                reject(error);
            });

            // Disconnect
            this.socket.on('disconnect', () => {
                this.isConnected = this.status();
                console.log("Socket disconnected");
            })
            
        })
    };

    disconnect = () => {
        return new Promise((resolve, reject) => {
            this.socket.disconnect();
            this.dispatch({
                type: SOCKET_DISCONNECT
            })
            this.navigate("/");
            window.location.reload();
            resolve(true);
        });
    }

    status = () => {
        if (this.socket) {
            return this.socket.connected;
        } else {
            return false;
        }
    }
    
    emit = (...args) => {
        if (this.socket) {
            return this.socket.emit(...args);
        } else {
            return false;
        }
    }
    
    on = (event, callback) => {
        this.socket.on(event, callback);
    };
}