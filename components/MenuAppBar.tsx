import { Box } from "@mui/system"
import Head from 'next/head'
import { AppBar } from '@mui/material'


const MenuAppBar = () => {
    const navHeight = '55px'

    return (
        <Box sx={ { flexGrow: 1 } }>
            <Head>
                <style>
                    { `body { margin-top: ${navHeight} }`}
                </style>
            </Head>
            <AppBar>
                Test
            </AppBar>
        </Box>
    )
}

export default MenuAppBar