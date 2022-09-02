import React from "react";
import { connect } from "react-redux";
import { BrowserView, TabletView, MobileOnlyView } from "react-device-detect";
import FixedNotificationDesktop from "./desktop/FixedNotification";
import FixedNotificationMobile from "./mobile/FixedNotification";
import NavbarDesktop from "./desktop/Navbar";
import NavbarMobile from "./mobile/Navbar";

const Header = (props) => {
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <>
            {/* fix notification */}
            <BrowserView>
                <FixedNotificationDesktop />
            </BrowserView>
            <TabletView>
                <FixedNotificationDesktop />
            </TabletView>
            <MobileOnlyView>
                <FixedNotificationMobile />
            </MobileOnlyView>


            {/* NAVBAR */}
            <BrowserView>
            {width > 900 
                ? <NavbarDesktop />
                : <NavbarMobile />
            }
            </BrowserView>
            <TabletView>
                {width > 900 
                ? <NavbarDesktop />
                : <NavbarMobile />
            }
            </TabletView>
            <MobileOnlyView>
                <NavbarMobile/>
            </MobileOnlyView>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(Header);