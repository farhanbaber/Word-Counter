function Count() {
    let inputText = document.getElementById("inputText").value.trim()
    let resultBox = document.getElementById("resultBox")
    let words = inputText.split (/\s+/)
    let count = 0
    for (let i = 0; i < words.length; i++) {

if (words[i]  !== "") {
    count++
    
}        
    }
    resultBox.value = "Total Words : " + count
}

