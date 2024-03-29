import React from 'react';
import styled from 'styled-components';
import {
	GrInstagram as InstagramIcon,
	GrMail as MailIcon,
} from 'react-icons/gr';
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
`;

const ContactButton = styled.a`
	font-family: ${fonts.roboto};
	padding: 14px;
	border: 2px solid ${colors.salmon};
	:hover {
		background-color: ${colors.salmon};
		color: ${colors.white};
	}
`;

const ContentWrapper = styled.main`
	display: flex;
	color: ${colors.black};
	padding: 96px;
	.info {
		padding: 0 5px 0 0;
	}
	@media only screen and (max-width: 1060px) {
		padding: 96px 48px;
	}
	@media only screen and (max-width: 800px) {
		display: block;
		padding: 32px;
		text-align: center;
		.info {
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
	text-align: left;
`;

const ListStyles = styled.ul`
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 40px;
	text-align: left;
	@media only screen and (max-width: 375px) {
		padding-inline-start: 20px;
	}
`;

const IndexPage = () => {
	return (
		<Layout>
			<NavWrapper>
				<a href='/' aria-label='Home'>
					kategorize
				</a>
				<MenuWrapper>
					<li className='desktop-nav-item'>
						<a
							href='https://www.instagram.com/kategorize.co'
							aria-label='Instagram'
						>
							<InstagramIcon />
						</a>
					</li>
					<li className='desktop-nav-item'>
						<a href='mailto:info@kategorize.co' aria-label='Email'>
							<MailIcon />
						</a>
					</li>
				</MenuWrapper>
			</NavWrapper>
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
							Hi, I’m Kat &amp; I’m here to help you with:
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
						<ContactButton href='mailto:info@kategorize.co' aria-label='Email'>
							Let's chat!
						</ContactButton>
					</div>
					<ContentWrapper>
						<ColumnWrapper className='info'>
							<h4>Location</h4>
							<p>Living in New York City but loves to travel.</p>
						</ColumnWrapper>
						<ColumnWrapper className='info'>
							<h4>Contact</h4>
							<a href='mailto:info@kategorize.co' aria-label='Email'>
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
