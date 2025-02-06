import { Box, Button, Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import VerifyModal from "../../components/Modal";
import { ToastContainer, toast } from "react-toastify";
import BtnB from "../../assets/btn.png";

import {
	FacebookIcon,
	FacebookShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "react-share";
import theme from "../../mui/theme";

const AIML_API_URL = "https://api.aimlapi.com/v1/chat/completions";
const API_KEY = "0e77e161ba2e4ec38fbe87c9b4bc9635";

function Dashboard() {
	const [activity, setActivity] = useState(null);
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);
	const [generateCount, setGenerateCount] = useState(0);
	const text = "Share with your friends 😉";

	const generate = async () => {
		setLoading(true);
		setGenerateCount(generateCount + 1);
		if (generateCount === 10) {
			setModal(true);
		}

		// axios
		//   .get("https://www.boredapi.com/api/activity/")
		//   .then((response) => {
		//     setActivity(response.data);
		//     setLoading(false);
		//   })
		//   .catch((error) => {
		//     console.log(error);
		//     setLoading(false);
		//     toast.error("No Internet");
		//     toast.error("No Internet");
		//   });
		try {
			const response = await axios.post(
				AIML_API_URL,
				{
					model: "gpt-3.5-turbo", // Specify the model (if required)
					messages: [
						{
							role: "user",
							content:
								"I'm bored, generate a random idea I can do right now to ease my boredom, give the category, the idea and the number of participants in a json form ",
						},
					],
					temperature: 0.7,
				},
				{ headers: { Authorization: `Bearer ${API_KEY}` } }
			);
			const aiResponse = response.data.choices[0].message.content;
			const ideaObject = JSON.parse(aiResponse);
			setActivity(ideaObject);

			console.log(ideaObject);
		} catch (error) {
			console.error("Error fetching boredom idea:", error);
			toast.error("Failed to fetch idea. Check your internet connection.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Box sx={{ background: theme.palette.primary.main }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							background: theme.palette.primary.main,
							minHeight: { xs: "80vh", sm: "100vh" },
							width: "100%",
							paddingTop: "130px",
							paddingBottom: "120px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						{!activity ? (
							<>
								<Typography
									variant="h1"
									color="textPrimary.main"
									align="center"
									width={{ sm: "50%" }}
									mb={5}>
									Generate an Idea
								</Typography>

								<Box position="relative" mt={4}>
									<img
										src={BtnB}
										alt=""
										style={{
											position: "absolute",
											marginTop: "-20px",
											marginLeft: "-20px",
										}}
									/>
									<Button
										variant="contained"
										color="primary"
										onClick={generate}
										sx={{
											height: "50px",
											width: "200px",
										}}>
										{loading ? <div className="loader"></div> : "Get Started"}
									</Button>
								</Box>
							</>
						) : (
							<>
								<Box
									sx={{
										background: "#212327",
										borderRadius: "20px",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										width: "90%",
										maxWidth: "691px",
										padding: "20px 0",
									}}>
									<Box
										mb={2}
										sx={{
											padding: "0 10px",
										}}>
										<Typography
											variant="h3"
											color={theme.palette.textPrimary.main}
											sx={{
												textTransform: "uppercase",
											}}
											align="center">
											CATEGORY
										</Typography>
										<Typography
											mt={2}
											mb={2}
											variant="body1"
											color={theme.palette.textPrimary.main}
											sx={{
												textTransform: "capitalize",
											}}
											align="center">
											{activity.category}
										</Typography>
									</Box>
									<Divider
										sx={{
											border: "1px solid rgba(47, 47, 47, 0.442)",
											minWidth: "100%",
										}}
									/>

									<Box
										mb={2}
										sx={{
											padding: "0 10px",
										}}>
										<Typography
											mt={2}
											variant="h3"
											color={theme.palette.textPrimary.main}
											sx={{
												textTransform: "uppercase",
											}}
											align="center">
											ACTIVITY IDEA
										</Typography>
										<Typography
											mt={2}
											mb={2}
											variant="body1"
											color={theme.palette.textPrimary.main}
											sx={{
												textTransform: "capitalize",
											}}
											align="center">
											{activity.idea}
										</Typography>
									</Box>
									<Divider
										sx={{
											border: "1px solid rgba(47, 47, 47, 0.442)",
											minWidth: "100%",
										}}
									/>

									<Box
										mb={2}
										sx={{
											padding: "0 10px",
										}}>
										<Typography
											mt={2}
											variant="h3"
											color={theme.palette.textPrimary.main}
											sx={{
												textTransform: "uppercase",
											}}
											align="center">
											PARTICIPANTS
										</Typography>
										<Typography
											mt={2}
											variant="body1"
											color={theme.palette.textPrimary.main}
											sx={{
												textTransform: "capitalize",
											}}
											align="center">
											{activity.participants}
										</Typography>
									</Box>
								</Box>

								<Button
									sx={{
										marginTop: "90px",
										height: "50px",
										width: "200px",
									}}
									variant="contained"
									color="primary"
									onClick={generate}>
									{loading ? <div className="loader"></div> : "Re-Generate"}
								</Button>
							</>
						)}
					</Box>
				</Container>
			</Box>

			{modal && (
				<VerifyModal
					open={modal}
					closeModal={() => setModal(false)}
					text={text}
					title="ENJOYING? 🤪"
					content={<Content />}
				/>
			)}
			<ToastContainer />
		</>
	);
}

export default Dashboard;

const Content = () => {
	const url =
		"You need to try this website, I've been generating fun ideas try it now! https://boredomideas.vercel.app";
	return (
		<>
			<div style={{ display: "flex", marginTop: "30px" }}>
				<FacebookShareButton url={url}>
					<FacebookIcon round={true} size={42} />
				</FacebookShareButton>
				<div style={{ marginRight: "10px" }}></div>
				<WhatsappShareButton url={url}>
					<WhatsappIcon round={true} size={42} />
				</WhatsappShareButton>
				<div style={{ marginRight: "10px" }}></div>
				<TwitterShareButton url={url}>
					<TwitterIcon round={true} size={42} />
				</TwitterShareButton>
				<div style={{ marginRight: "10px" }}></div>
				<TelegramShareButton url={url}>
					<TelegramIcon round={true} size={42} />
				</TelegramShareButton>
			</div>
		</>
	);
};
