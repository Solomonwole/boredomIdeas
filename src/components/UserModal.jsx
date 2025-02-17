import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AiOutlineClose } from "react-icons/ai";
import theme from "../mui/theme";
import { Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#F4F4F4",
	border: "none",
	boxShadow: 24,
	borderRadius: "20px",
	p: 4,
};
export default function UserModal({ open, setOpen }) {
	const navigate = useNavigate();
	const handleClose = () => setOpen(false);
	const { userName, setUserName } = useContext(userContext);

	const handleForm = async () => {
		if (userName !== "") {
			navigate("/dashboard");
			handleClose();

			try {
				const firestore = getFirestore(); // Get Firestore instance
				const usersCollectionRef = doc(firestore, "users", "all"); // Reference the "users" collection and "all" document

				// Update the "user" field with arrayUnion to add the username
				await updateDoc(usersCollectionRef, {
					user: arrayUnion(userName),
				});
			} catch (error) {
				// Handle any errors here
				console.error("Error saving username:", error);
			}
		}
	};
	return (
		<div>
			<Modal
				open={open}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center">
							<Typography variant="h2" component="h2">
								To Get Started
							</Typography>

							<IconButton onClick={handleClose}>
								<AiOutlineClose color={theme.palette.primary.main} />
							</IconButton>
						</Stack>

						<Box
							mt={4}
							component="form"
							sx={{
								width: "100%",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
							onSubmit={handleForm}>
							<TextField
								label="&nbsp;&nbsp;&nbsp; Set Your Username"
								value={userName}
								onChange={(e) => {
									localStorage.setItem("userName", e.target.value);
									setUserName(e.target.value);
								}}
								sx={{
									width: "100%",
									margin: "10px 0",
								}}
								InputProps={{
									style: {
										borderRadius: "32px",
									},
								}}
								required
							/>

							<Button
								variant="contained"
								color="primary"
								sx={{
									width: "100%",
									margin: "10px 0",
									height: "55px",
									boxShadow: "none",
									webkitBoxShadow: "none",
									mozBoxShadow: "none",
								}}
								type="submit">
								Continue
							</Button>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
