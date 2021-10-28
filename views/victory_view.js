const VictoryView = (player) => {
    document.body.querySelector(".dark-back").style.display = "inline-block";
    document.body.querySelector(".dark-back").innerHTML = `<h2 class="victory">${player} won!</h2>`;
}

export default VictoryView; 