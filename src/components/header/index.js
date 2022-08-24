import React from "react";
import { connect } from "react-redux";
import { BrowserView, TabletView, MobileView } from "react-device-detect";
import FixedNotificationDesktop from "./desktop/FixedNotification";
import FixedNotificationMobile from "./mobile/FixedNotification";

const Header = (props) => {
    return (
        <>
            {/* fix notification */}
            <BrowserView>
                <FixedNotificationDesktop />
            </BrowserView>
            <TabletView>
                <FixedNotificationDesktop />
            </TabletView>
            <MobileView>
                <FixedNotificationMobile />
            </MobileView>


            <div style={{
                borderBottom: "1px solid black"
            }}>
                {/* logo section */}
                {/* <img src="/logo.png" /> */}
                {/* important links */}
                {/* important icons */}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(Header);