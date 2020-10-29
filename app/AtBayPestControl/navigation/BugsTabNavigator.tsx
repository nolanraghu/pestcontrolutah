import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {BugsTabParamList} from "../types";
import BugsTabScreen from "../screens/BugsTabScreen";
import BugInfoPopup from "../screens/BugInfoPopup";
import PlanUpdatePopup from "../screens/PlanUpdatePopup";

const BugsTabStack = createStackNavigator<BugsTabParamList>();

function BugsTabNavigator() {
    return (
        <BugsTabStack.Navigator>
        <BugsTabStack.Screen
            name="BugsTabScreen"
    component={BugsTabScreen}
    options={{ headerTitle: 'AtBay Pest Control' }}
    />
    <BugsTabStack.Screen
    name="BugInfoPopupScreen"
    component={BugInfoPopup}
    options={{ headerTitle: 'AtBay Pest Control' }}
    />
    <BugsTabStack.Screen
    name="PlanUpdatePopupScreen"
    component={PlanUpdatePopup}
    options={{ headerTitle: 'AtBay Pest Control' }}
    />
    </BugsTabStack.Navigator>
);
}

export default BugsTabNavigator;