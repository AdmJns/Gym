// Funktion zum Speichern der Gewichte im Local Storage
function saveWeights() {
    var weights = {};

    // Alle Textfelder durchlaufen und die eingegebenen Gewichte speichern
    var inputs = document.querySelectorAll('.workout input[type=text]');
    inputs.forEach(function(input) {
        weights[input.id] = input.value;
    });

    // Gewichtsdaten in JSON umwandeln
    var weightsJSON = JSON.stringify(weights);

    // Gewichtsdaten im Local Storage speichern
    localStorage.setItem('weights', weightsJSON);

    // Erfolgsmeldung anzeigen
    console.log('Gewichte erfolgreich gespeichert!');
}

// Funktion zum Laden der Gewichte aus dem Local Storage
function loadWeightsFromLocalStorage() {
    var savedWeights = localStorage.getItem('weights');

    // Wenn gespeicherte Gewichte vorhanden sind
    if (savedWeights) {
        // Gespeicherte Gewichte in ein JavaScript-Objekt umwandeln
        var weights = JSON.parse(savedWeights);

        // Für jede Übung die gespeicherten Gewichte in die entsprechenden Textfelder einfügen
        for (var exercise in weights) {
            if (weights.hasOwnProperty(exercise)) {
                var inputElement = document.getElementById(exercise);
                if (inputElement) {
                    inputElement.value = weights[exercise];
                }
            }
        }
    }
}

// Funktion zum Anzeigen der Dienstag-Übungen
function showTuesday() {
    document.getElementById('tuesdayContent').style.display = 'block';
    document.getElementById('fridayContent').style.display = 'none';
}

// Funktion zum Anzeigen der Freitag-Übungen
function showFriday() {
    document.getElementById('fridayContent').style.display = 'block';
    document.getElementById('tuesdayContent').style.display = 'none';
}

// Funktion zum Anzeigen des GIFs für eine Übung
function showGif(exercise) {
    var gifContainer;
    switch (exercise) {
        case 'latzug_uebergriff':
            gifContainer = document.getElementById('tuesdayGifContainer');
            gifUrl = 'https://www.marathonfitness.de/wp-content/uploads/2023/06/latzug-latziehen-obergriff-ausfuehrung.gif';
            break;
        case 'latzug_untergriff':
            gifContainer = document.getElementById('tuesdayGifContainer');
            gifUrl = 'https://www.marathonfitness.de/wp-content/uploads/2023/06/latzug-latziehen-untergriff-ausfuehrung.gif';
            break;
        case 'rudern':
            gifContainer = document.getElementById('tuesdayGifContainer');
            gifUrl = 'https://modusx.de/wp-content/uploads/langhantelrudern-untergriff.gif';
            break;
        case 'cable_curls':
            gifContainer = document.getElementById('tuesdayGifContainer');
            gifUrl = 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2022/04/reverse-cable-curls.gif';
            break;
        case 'bizeps_curls':
            gifContainer = document.getElementById('tuesdayGifContainer');
            gifUrl = 'https://www.fitundattraktiv.de/wp-content/uploads/2018/03/bizeps_curls_kurzhantel-beidarmig.gif';
            break;
        case 'latzug':
            gifContainer = document.getElementById('fridayGifContainer');
            gifUrl = 'https://www.marathonfitness.de/wp-content/uploads/2023/06/latzug-latziehen-obergriff-ausfuehrung.gif';
            break;
        case 'negative_liegestuetz':
            gifContainer = document.getElementById('fridayGifContainer');
            gifUrl = 'https://modusx.de/wp-content/uploads/negative-liegestuetze.gif';
            break;
        case 'butterfly':
            gifContainer = document.getElementById('fridayGifContainer');
            gifUrl = 'https://modusx.de/wp-content/uploads/butterfly-geraet.gif';
            break;
        case 'seitheben':
            gifContainer = document.getElementById('fridayGifContainer');
            gifUrl = 'https://modusx.de/wp-content/uploads/einarmiges-seitheben-stehend.gif';
            break;
        case 'trizepsdruecken':
            gifContainer = document.getElementById('fridayGifContainer');
            gifUrl = 'https://modusx.de/wp-content/uploads/trizeps-pushdown-kabelzug-seil.gif';
            break;
        default:
            break;
    }
    gifContainer.innerHTML = `<img src="${gifUrl}" alt="${exercise}">`;
}

// Beim Laden der Seite prüfen, ob Gewichte im Local Storage gespeichert sind und sie laden
window.onload = function() {
    loadWeightsFromLocalStorage();
};