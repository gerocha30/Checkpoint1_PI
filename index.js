const tempoPipoca = 10,
    tempoMacarrao = 8,
    tempoCarne = 15,
    tempoFeijao = 12,
    tempoBrigadeiro = 8,
    pipoca = 'pipoca',
    macarrao = 'macarrao',
    carne = 'carne',
    feijao = 'feijao',
    brigadeiro = 'brigadeiro';

function microwave(meal, time) {

    let deafultTime;

    switch (meal) {
        case tempoPipoca:
        case pipoca:
            deafultTime = tempoPipoca;
            break;
        case tempoMacarrao:
        case macarrao:
            deafultTime = tempoMacarrao;
            break;
        case tempoCarne:
        case carne:
            deafultTime = tempoCarne;
            break;
        case tempoFeijao:
        case feijao:
            deafultTime = tempoFeijao;
            break;
        case tempoBrigadeiro:
        case brigadeiro:
            deafultTime = tempoBrigadeiro;
            break;
        default:
            console.log("Prato inexistente");
    }

    if (time >= deafultTime * 2 && time < deafultTime * 3) {
        console.log('A comida queimou.');
    } else if (time < deafultTime) {
        console.log("Tempo insuficiente.");
    } else if (time >= deafultTime * 3) {
        console.log('KABUMM');
    }
}

microwave(brigadeiro, 20);

console.log("Prato pronto, bom apetite!");