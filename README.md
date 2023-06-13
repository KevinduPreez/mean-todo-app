# Mean Todo App

## The tiny little React app that tells you what it thinks of you if you fail to complete your todo by the due date.

So don't be a dissapointment.

**...Finish your work**.

### How to use

1. Clone the repository
2. cd into newly cloned directory
3. In your terminal `run npm install`
4. In the chat.js file, add in your Chat-GPT key in the section titled `[APIKEY GOES HERE]`
5. then `npm run start`

### How to configure

The ChatGPT model being used is GPT3. The "mean" responses can be a little tempermental. However I think I've managed to get both the request phrase and the ["temprature"](https://community.openai.com/t/cheat-sheet-mastering-temperature-and-top-p-in-chatgpt-api-a-few-tips-and-tricks-on-controlling-the-creativity-deterministic-output-of-prompt-responses/172683) right to get a reasonable response out of it. However if you wish to play around with the mean response, you can access the ChatGPT API config in the `./src/chat.js` file.
