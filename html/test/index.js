let testData = {
      name: "you don't know js",
      question: [
            {
                  q: "var or const",
                  answers: [
                        { a: 'var', weight: -5 },
                        { a: 'const', weight: 5 }
                  ]
            },
            {
                  q: 'closure or oop?',
                  answers: [
                        { a: 'alternative duck', weight: -5 },
                        { a: 'learn js', weight: 5 }
                  ]
            }
      ],
}
let currentQuestion = 0;
let render =()=>{
     debugger
test.innerHTML = `
      <h1> ${testData.name}</h1>
      <h2>
            ${testData.question[currentQuestion].q}
      </h2>
      <div>
            ${testData.question[currentQuestion].answers.map(answer=>{
                   return `<label><input type='checkbox'>${answer.a}</label>`
            }).join('</br>')} 
      </div>
      <button id='prev'>Prev</button>
      <button id='next'>Next</button>
      <input type='number' id='questionNum' value='${currentQuestion}' />
      
`
      prev.onclick = ()=> (currentQuestion--,render());
      next.onclick = ()=> (currentQuestion++,render());
}
render();
