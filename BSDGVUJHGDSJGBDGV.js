AFRAME.registerComponent("marker-handler", {
    init: async function () {
        this.el.addEventListener("markerFound",() => {
            console.log("marker is fOUND but my braincells aren't")
            this.handlemarkerfound()
        
        })

        this.el.addEventListener("markerLost",() => {
            console.log("marker has been lost but my braincells haven't")
            this.handlemarkerlost()
        
        })
    },

    handlemarkerfound: function () {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"


        var ratingButton = document.getElementById("rating-button");
        var orderButtton = document.getElementById("order-button");

        ratingButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "rate dish",
                text: "WAIT LAH"            
            })
        }),

        orderButtton.add("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "oRDeReD",
                text: "WAIT FOR YOUR FOOD."            
            })
        })





    },

    handlemarkerlost: function () {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})