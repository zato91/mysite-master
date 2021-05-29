import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";


const Footer = () => {
return (
	<Box>
	<Container>
        <Row>
            <Column>
                <Heading><FontAwesomeIcon size="2x" icon={faFacebook} /> </Heading>
                
            </Column>
        
            <Column>
                <Heading><FontAwesomeIcon size="2x" icon={faInstagram} /> </Heading>
                
            </Column>
            <Column>
                <Heading><FontAwesomeIcon size="2x" icon={faTwitter} /> </Heading>
                
            </Column>
            <Column>
                <Heading><FontAwesomeIcon size="2x" icon={faYoutube} /> </Heading>
                
            </Column>
        </Row>   
      </Container>
      <h1 style={{ color: "white",
				textAlign: "center",
                fontSize: 20 }}>
		Phonexxxx  or   Email:xxxx

	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>XXX</Heading>
			<FooterLink href="#">Copyright</FooterLink>
			<FooterLink href="#">Ny</FooterLink>
		
		</Column>
		<Column>
			<Heading>Home</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Portfilio Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Resume</Heading>
			<FooterLink href="#">gmail.com</FooterLink>
			
			
	
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
