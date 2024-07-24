// 4.2 Desctructuring arrays
const scores = [51, 99, 78, 68, 77]
const [eng, swa, mat, sci, ssre] = scores
console.log(`
    New Report Card
    ENG- ${eng}
    SWA- ${swa}
    MAT- ${mat}
    SCI- ${sci}
    SSR- ${ssre}
    ----------------
    TOTAL = ${scores.reduce((a,v)=>a+v,0)}
    `)

console.log(`
    Report Card
    ENG- ${scores[0]}
    SWA- ${scores[1]}
    MAT- ${scores[2]}
    SCI- ${scores[3]}
    SSR- ${scores[4]}
    ----------------
    TOTAL = ${scores.reduce((a,v)=>a+v,0)}
    `)