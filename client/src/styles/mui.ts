import { createTheme, responsiveFontSizes } from "@mui/material";
import { deepPurple } from "@mui/material/colors";


let theme = createTheme(
    {
        palette:{
            mode:"dark",
            primary:{
                main:deepPurple[500]
            }
        }
    }
)

theme = responsiveFontSizes(theme)

export default theme