import { Box } from '@mui/system'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Head from 'next/head'


const MenuAppBar = () => {
	const navHeight = '55px'

	return (
		<Box
			sx={ {
				flexGrow: 1,
				display: 'flex',
				flexDirection: 'row',
			} }
		>
			<Head>
				<style>
					{ `body { margin-top: ${navHeight} }`}
				</style>
			</Head>
			<AppBar
				position="fixed"
			>
				<Toolbar
					sx={ {
						justifyContent: 'space-between',
					} }
					component={ Container }
				>
					<Typography
						sx={ { display: 'block' } }
					>
						Library Simulator
					</Typography>
					<Box
						sx={ {
							float: 'right',
						} }
					>
						User
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default MenuAppBar
