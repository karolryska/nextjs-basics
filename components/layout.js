import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.header`
	display: flex;
	align-items: center;
	height: 60px;
	width: 100vw;
	background-color: pink;
`;

const NavList = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const NavItem = styled.li`
	margin-right: 20px;
`;

const Layout = ({ children }) => {
	return (
		<>
			<Header>
				<nav>
					<NavList>
						<NavItem>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/ssg'>
								<a>Static</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/ssr'>
								<a>Server</a>
							</Link>
						</NavItem>
					</NavList>
				</nav>
			</Header>
			<main>
				<h1>{children}</h1>
			</main>
		</>
	);
};

export default Layout;
