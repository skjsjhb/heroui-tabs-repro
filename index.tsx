import { HeroUIProvider, Link, Tab, Tabs } from "@heroui/react";
import React, { useState } from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";
import { Route, Router, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

const App = () => {
    return <React.StrictMode>
        <Router hook={useHashLocation}>
            <Main />
        </Router>
    </React.StrictMode>;
};

const Main = () => {
    const [, nav] = useLocation();

    return <HeroUIProvider navigate={(h) => {
        nav(h);
        alert("Navigate function called.")
    }}>
        <div className="flex flex-col gap-2">
            Tabs:
            <TabsExample />

            <hr />

            Links:
            <LinksExample />
        </div>
        <hr />
        <Content />
    </HeroUIProvider>;
};

const TabsExample = () => {
    const [pathname] = useLocation();

    return <Tabs aria-label="Options" selectedKey={pathname}>
        <Tab key="/" title="Page 1" href="/" />
        <Tab key="/page" title="Page 2" href="/page" />
    </Tabs>;
};

const LinksExample = () => {
    return <>
        <Link href="/">Page 1</Link>
        <Link href="/page">Page 2</Link>
    </>;
};

const Content = () => {
    return <Switch>
        <Route path={"/page"} component={Component2} />
        <Route path={"/"} component={Component1} />
    </Switch>;
};

const Component1 = () => <div>This is the default page.</div>;

const Component2 = () => <div>It works if you see this.</div>;

window.onload = () => {
    createRoot(document.getElementById("app")!).render(<App />);
};