import React from 'react';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import {
	GrInstagram as InstagramIcon,
	GrMail as MailIcon,
} from 'react-icons/gr';
// import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import Layout from '../components/layout';
import { colors, fonts } from '../constants';
import StackedMain from '../images/kategorize-stacked-main.png';
import BrightIdeas from '../images/bright-ideas.png';

// styles
const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	margin: 0 24px;
	font-size: 1.5rem;
	font-weight: 500;
`;

const MenuWrapper = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	li {
		margin: 5px 0 0 10px;
	}
	/* .mobile-nav-menu {
		position: absolute;
		top: 0;
		left: 110vw;
		height: 100vh;
		width: 100vw;
		background: #f0eece;
		&.active {
			left: 0;
		}
	}
	.desktop-nav-item {
		@media only screen and (max-width: 800px) {
			display: none;
		}
		margin: 5px;
	}
	.burger {
		@media only screen and (min-width: 801px) {
			display: none;
		}
		:hover {
			cursor: pointer;
		}
	} */
`;

const ContactButton = styled.a`
	font-family: ${fonts.roboto};
	padding: 14px;
	border: 2px solid ${colors.orange};
	:hover {
		background-color: ${colors.orange};
		color: #fff;
	}
`;

const ContentWrapper = styled.main`
	display: flex;
	color: '#232129';
	padding: 96px;
	.info {
		padding: 0;
	}
	@media only screen and (max-width: 1060px) {
		padding: 96px 48px;
	}
	@media only screen and (max-width: 800px) {
		display: block;
		padding: 32px;
		.info {
			text-align: center;
			div {
				width: 90%;
			}
		}
	}
`;

const ColumnWrapper = styled.div`
	width: 50%;
	div {
		padding: 17px;
	}
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
	img {
		max-width: 520px;
	}
`;

const HeadingStyles = styled.h1`
	margin-top: 0;
	margin-bottom: 64;
	max-width: 320;
	font-size: 1.5rem;
`;

const ListStyles = styled.ul`
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 40px;
	@media only screen and (max-width: 375px) {
		padding-inline-start: 20px;
	}
`;

// const HamburgerRow = styled.div`
// 	height: 3px;
// 	width: 50px;
// 	background-color: ${colors.orange};
// 	margin-bottom: 10px;
// `;

// markup
const IndexPage = () => {
	// const [active, setActive] = useState(false);
	// const HamburgerIcon = () => (
	// 	<div
	// 		className='burger'
	// 		onClick={() => {
	// 			setActive(true);
	// 		}}
	// 	>
	// 		<HamburgerRow />
	// 		<HamburgerRow />
	// 		<HamburgerRow />
	// 	</div>
	// );
	return (
		<Layout>
			<NavWrapper>
				<a href='/'>kategorize</a>
				<MenuWrapper>
					{/* <HamburgerIcon /> */}
					<li className='desktop-nav-item'>
						<a href='https://www.instagram.com/kategorize.co'>
							<InstagramIcon color={colors.orange} />
						</a>
					</li>
					<li className='desktop-nav-item'>
						<a href='mailto:info@kategorize.co'>
							<MailIcon color={colors.orange} />
						</a>
					</li>
					{/* <div className={`mobile-nav-menu ${active && 'active'}`}>
						<CloseIcon
							size={32}
							color={'#838f56'}
							onClick={() => setActive(false)}
						/>
						<li className='mobile-nav-item'>
							<a href='https://www.instagram.com/kategorize.co'>
								<InstagramIcon color={'#838f56'} />
							</a>
						</li>
						<li className='desktop-nav-item'>
							<a href='mailto:info@kategorize.co'>
								<MailIcon color={'#838f56'} />
							</a>
						</li>
					</div> */}
				</MenuWrapper>
			</NavWrapper>
			<title>kategorize</title>
			<ContentWrapper>
				<ColumnWrapper>
					<img
						width='100%'
						src={StackedMain}
						alt='Kategorize Stacked Main Logo'
					/>
					<img
						width='100%'
						src={BrightIdeas}
						alt='Kategorize Stacked Main Logo'
					/>
				</ColumnWrapper>
				<ColumnWrapper>
					<div>
						<HeadingStyles>
							Hi, I’m Kat & I’m here to help you with:
						</HeadingStyles>
						<ListStyles>
							<li>
								<p>
									organizing any room, corner, cabinet, or closet in your home
								</p>
							</li>
							<li>
								<p>
									going through paperwork, clothes, belongings, old boxes, or
									food
								</p>
							</li>
							<li>
								<p>organizing digital files</p>
							</li>
							<li>
								<p>moving - do you want to get rid of stuff before you pack?</p>
							</li>
							<li>
								<p>
									unpacking - are you trying to figure out where to put things?
								</p>
							</li>
							<li>
								<p>
									going through paperwork or belongings of a loved one that has
									passed away
								</p>
							</li>
						</ListStyles>
					</div>
					<div style={{ textAlign: 'center' }}>
						<ContactButton href='mailto:info@kategorize.co'>
							Let's chat!
						</ContactButton>
					</div>
					<ContentWrapper>
						<ColumnWrapper className='info'>
							<h4>Location</h4>
							<p>New York City and Southern California</p>
						</ColumnWrapper>
						<ColumnWrapper className='info'>
							<h4>Contact</h4>
							<a href='mailto:info@kategorize.co'>
								<p>info@kategorize.co</p>
							</a>
						</ColumnWrapper>
					</ContentWrapper>
				</ColumnWrapper>
			</ContentWrapper>
		</Layout>
	);
};

export default IndexPage;
