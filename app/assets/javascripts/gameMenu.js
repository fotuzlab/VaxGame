
function initBasicMenu() {

    // new game header at top-left
    d3.select("body").append("div")
        .attr("class", "newGameHeader")
        .text("NEW GAME")

    // difficulty selection div
    d3.select("body").append("div")
        .attr("class", "difficultySelection")

    // header for difficulty selection
    d3.select(".difficultySelection").append("div")
        .attr("class", "difficultyHeader")
        .text("DIFFICULTY")

    // difficulty menu items
    d3.select(".difficultySelection").append("div")
        .attr("class", "difficultyItem")
        .attr("id", "difficultyEasy")
        .text("Easy")
        .on("mouseover", function() {
            d3.select(this).style("color", "#2692F2")
        })
        .on("mouseout", function() {
            d3.select(this).style("color", "#707070")
        })
        .on("click", function() {
            difficultyString = "easy"
            initBasicGame(difficultyString);
        })



    d3.select(".difficultySelection").append("div")
        .attr("class", "difficultyItemGrey")
        .attr("id", "difficultyMedium")
        .text("Medium")



    d3.select(".difficultySelection").append("div")
        .attr("class", "difficultyItemGrey")
        .attr("id", "difficultyHard")
        .text("Hard")



    d3.select(".difficultySelection").append("div")
        .attr("class", "difficultyItemGrey")
        .attr("id", "difficultyCustom")
        .text("Custom")


}


function initCustomMenu() {

    d3.select(".difficultySelection").style("top", "40px")

    d3.selectAll(".difficultyItem").remove()
    d3.selectAll(".difficultyItemHighlight").remove()
    d3.selectAll(".difficultyItemGrey").remove()
    d3.selectAll(".difficultyCustom").remove()
    d3.selectAll(".difficultyHeader").remove()

    d3.select("#customMenuDiv").style("visibility", "visible")

    d3.select("#customNodes").text("Nodes: " + parseInt($.cookie('customNodes')))
    d3.select("#customDegree").text("Neighbors: " + parseInt($.cookie('customNeighbors')) + "ea.")
    d3.select("#customVaccines").text("Vaccines: " + parseInt($.cookie('customVaccines')))
    d3.select("#customOutbreaks").text("Outbreaks: " + parseInt($.cookie('customOutbreaks')))


    d3.select("#customMenuDiv").append("text")
        .attr("class", "okayButton")
        .text("OKAY")
        .on("click", function() {

            initCustomGame();


        })


}

$(function() {
    $( "#nodeSlider").slider({
        range: "min",
        min: 1,
        max: 150,
        value: parseInt($.cookie('customNodes')),
        slide: function (event, ui) {
            $.cookie('customNodes', ui.value)
            $("#customNodes").text("Nodes: " + parseInt($.cookie('customNodes')));
            customNodeChoice = parseInt($.cookie('customNodes'));
        }
    });
    $( "#nodeSlider" ).slider( "value", parseInt($.cookie('customNodes')));
});

$(function() {
    $( "#degreeSlider").slider({
        range: "min",
        min: 1,
        max: 10,
        value: parseInt($.cookie('customNeighbors')),
        slide: function (event, ui) {
            $.cookie('customNeighbors', ui.value)
            $("#customDegree").text("Neighbors: " + parseInt($.cookie('customNeighbors')) + "ea.");
            customNeighborChoice = parseInt($.cookie('customNeighbors'));
        }
    });
    $( "#degreeSlider").slider( "value", parseInt($.cookie('customNeighbors')))
});

$(function() {
    $( "#vaccineSlider").slider({
        range: "min",
        min: 1,
        max: 300,
        value: parseInt($.cookie('customVaccines')),
        slide: function (event, ui) {
            $.cookie('customVaccines', ui.value)
            $("#customVaccines").text("Vaccines: " + parseInt($.cookie('customVaccines')));
            customVaccineChoice = parseInt($.cookie('customVaccines'));
        }
    });
    $( "#vaccineSlider").slider( "value", parseInt($.cookie('customVaccines')))
});

$(function() {
    $( "#outbreakSlider").slider({
        range: "min",
        min: 1,
        max: 5,
        value: parseInt($.cookie('customOutbreaks')),
        slide: function (event, ui) {
            $.cookie('customOutbreaks', ui.value)
            $("#customOutbreaks").text("Outbreaks: " + parseInt($.cookie('customOutbreaks')));
            customOutbreakChoice = parseInt($.cookie('customOutbreaks'));
        }
    });
    $( "#outbreakSlider").slider( "value", parseInt($.cookie('customOutbreaks')))
});



