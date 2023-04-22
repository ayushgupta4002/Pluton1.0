const express = require('express');
const OPENAI_API_KEY="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";
const cors = require('cors')
const { Configuration, OpenAIApi }= require('openai') ;
const configuration = new Configuration({

    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);







const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
    res.json({
        message:"welcome to this server"
    });
});

app.post("/chat",(req,res) => {
    console.log("test1")
    const question= req.body.prompt;
    console.log(question);
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 4000,
        temperature: 0,
      }).then((response)=>{
        res.send(
            response.data.choices[0].text)
        console.log(response.data.choices[0].text);
      });
   
});






app.listen(PORT, () => {
    console.log(`Server is running on 5000`)
  });