import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
        const [category, setCategory] = useState("");
        const [difficulty, setDifficulty] = useState("");
        const [error, setError] = useState(false);

        const history = useHistory();

        const handleSubmit = () => {
            if (!category || !difficulty || !name) {
                setError(true);
                return;
            } else {
                setError(false);
                fetchQuestions(category, difficulty);
                history.push("/quiz");
            }
        };

        return ( <
            div className = "content" >
            <
            div className = "settings" >
            <
            span style = {
                { fontSize: 30 } } > Quiz Settings < /span> <
            div className = "settings__select" > {
                error && < ErrorMessage > Please Fill all the feilds < /ErrorMessage>} <
                TextField
                style = {
                    { marginBottom: 25 } }
                label = "Enter Your Name"
                variant = "outlined"
                onChange = {
                    (e) => setName(e.target.value) }
                /> <
                TextField
                style = {
                    { marginBottom: 25 } }
                label = "Gender "
                variant = "outlined"
                onChange = {
                    (e) => setGender(e.target.value) }
                /> 
                Start Quiz <
                /Button> <
                /div> <
                /div> <
                img src = "/quiz.svg"
                className = "banner"
                alt = "quiz app" / >
                <
                /div>
            );
        };

        export default Home;