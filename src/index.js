let nomeHeroi = 'lukinhaxx';
let xp = [800, 1500, 2500, 4000, 5500, 7500, 8500, 9500, 10500]; // Vários valores de XP para testar

for (let i = 0; i < xp.length; i++) {
    let qntXp = xp[i];  
    
    if (qntXp < 1000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Ferro`);
    } else if (qntXp >= 1000 && qntXp < 2000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Bronze`);
    } else if (qntXp >= 2000 && qntXp < 5000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Prata`);
    } else if (qntXp >= 5000 && qntXp < 6000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Ouro`);
    } else if (qntXp >= 6000 && qntXp < 7000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Platina`);
    } else if (qntXp >= 7000 && qntXp < 8000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Ascendente`);
    } else if (qntXp >= 8000 && qntXp < 9000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Imortal`);
    } else if (qntXp >= 9000 && qntXp < 10000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Radiante`);
    } else if (qntXp >= 10000) {
        console.log(`O herói de nome ${nomeHeroi} está no nível de Radiante`);
    }
}
