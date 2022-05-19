import {ShoppingCart, Users, CreditCard, Flag, Settings, BarChart, Grid, Archive} from "react-feather"
export const menu = [
    {
        title: "Home",
        icon: <Grid size={16}/>
    },
    {
        title: "Send Money",
        icon: <Archive size={16}/>
    },
    {
        title: "Investment",
        icon: <ShoppingCart size={16}/>
    },
    {
        title: "Loan",
        icon: <CreditCard size={16}/>
    },
    {
        title: "Cards",
        icon: <Users size={16}/>
    },
    {
        title: "Transaction",
        icon: <BarChart size={16}/>
    },
    {
        title: "Marketplace",
        icon: <Flag  size={16}/>
    },
   {
        title: "Settings",
        icon: <Settings size={16}/>
    }
]