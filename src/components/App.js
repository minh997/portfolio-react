import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Section from "./Section";

import InfoHolder from "./InfoSection/InfoHolder";
import ProjectHolder from "./ProjectSection/ProjectHolder";
import ContactHolder from "./ContactSection/ContactHolder";
import NavBar from "./NavBar-old";

class App extends React.Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
        console.log(origin);
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div style={{ zIndex: -1 }}>
                    <ReactFullpage
                        autoScrolling={true}
                        scrollHorizontally={true}
                        loopBottom={true}
                        loopHorizontal={false}
                        recordHistory={false}
                        navigation={true}
                        navigationTooltips={["About Me", "Projects", "Contact"]}
                        slidesNavigation={true}
                        verticalCentered={false}
                        onLeave={this.onLeave.bind(this)}
                        afterLoad={this.afterLoad.bind(this)}
                        anchors={["intro", "projects", "contact"]}
                        render={({ state, fullpageApi }) => {
                            return (
                                <React.Fragment>
                                    <Section
                                        title="Hi, My name is Minh"
                                        content={<InfoHolder />}
                                    />

                                    <ProjectHolder
                                        title="Pet Projects"
                                        fullpageApi={fullpageApi}
                                    />
                                    <Section
                                        title="Contact"
                                        content={<ContactHolder />}
                                    />
                                </React.Fragment>
                            );
                        }}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
