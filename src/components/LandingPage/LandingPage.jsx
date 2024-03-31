import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./LandingPage.module.css";
import HeroHeader from "../HeroHeader/HeroHeader";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractices from "../AreaOfPractices/AreaOfPractices";
import Clients from "../Clients/Clients";
import Team from "../Team/Team";
import Faq from "../Faq/Faq";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const LandingPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.landingPage1}>
				<Navbar />
				<HeroHeader />
			</div>
			<div className={styles.contentBackground}>
				<div className={styles.contentWrapper}>
					<Introduction />
					<ChooseUs />
					<AreaOfPractices />
					<Clients />
					<Team />
					<Faq />
					<Newsletter />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;