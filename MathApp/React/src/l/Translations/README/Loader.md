#### To use the new MJ component with the loading animation, you need to import it from 'Components/Translations/Loader/MJ', it takes the same parameters as the old MJ Component, the difference that it doesn't render any latex, something like :
![eduapps](https://i.ibb.co/BgKhdZv/2021-06-29-10-49-07.png)

#### To Typeset the latex (Typesetting means rendering the latex to math symbols in the HTML document), you need to import WithMathJax component from 'Components/Translations/Loader/WithMathJax', and use it only once at the beginning of the Step, like this:

```Javascript
export default function Step1() {
   return(
   <>
   <WithMathJax />
   ## Other code
   </>
   )
}
``` 

#### WithMathJax takes one parameter inputs, which is the array of states that will rerender the latex, for example if you have a state called num1 binded to a NumericInput, and num1 is an input to MJ component, you will have to add num1 to the inputs of WithMathJax.
#### Take a look at the sample code :
```Javascript
export default function Step1() {
  const [num1, setnum1] = useState(1)
  return(
    <>
    <WithMathJax inputs={[num1]}/>
    <NumericInput value={1} onChange={(value) => setnum1(value)}/>
    <MJ j={`\\sqrt{${num1}}`}/>
    </>
   )
}
``` 
![eduapps2](https://i.ibb.co/nfJZcrV/2021-06-29-11-13-34.png)

#### That leaves us with the loading animation, import the Loader component from Components/Translations/Loader/Loader
#### Think of the Loader component as a simple div that you can give className, style, and other arguments.. but will actually display an animation until the latex is finished rendering in the HTML Document.
#### Arguments Description
 - className -> Any classes you want to give to the Loader div, its type is String
 - style -> The style object you want to give to the Loader div, its type is object
 - anim -> controls how to display the loading animation, can be three values:
           "always" means displaying the animation each time the Latex is rendered
           "refresh" means displaying the animation only on refreshing, meaning that it will not display the first time
           "never" means never displaying the animation
 - aclassName -> Any classes you want to give to the Animation div
 - astyle -> The style object you want to give to the Animation div, for example: {width: "100px", height: "100px}, that will display a large Animation
 - inputs -> The array of inputs that will trigger the Loading animation

#### Take a look at the sample code :
```Javascript
export default function Step1() {
  const [num1, setnum1] = useState(1)
  return(
    <>
    <WithMathJax inputs={[num1]}/>
    <div className = "row flex-center text-out" style={{margin: "10vh 10px"}}>
      <NumericInput value={1} onChange={(value) => setnum1(value)}/>
      <Loader className="row col-sm-12 flex-center" astyle={{width: "100px", height: "100px"}} inputs={[num1]}>
          <MJ j={`\\sqrt{${num1}}`}/>
      </Loader>
   )
}
``` 
![eduapps3](https://i.ibb.co/zQQM0wR/2021-06-29-11-36-38.png)

## Complete Examples

You can find a detailed example on sample-app branch: Learn tab step 14
- [step 14](https://github.com/EduApps-Egypt/ReactApps/blob/sample-app/src/sample_app/Content/Learn/step14.js)
  
