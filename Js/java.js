// Image Changer
var imagesPath = ['Image/Backgroundimg1.jpg', 'Image/Backgroundimg3.jpg', 'Image/Backgroundimg4.jpg',]; 
// Array 
var imgDiv = document.getElementById("homeimg");
// Variable
var index = 0;
// Time for image slide
setInterval(slider, 3000);
// function start
function slider() {
    if (index < imagesPath.length) {
        index = index + 1;
    } else {
        index = 1;
    }
    imgDiv.innerHTML = "<img src=" + imagesPath[index - 1] + ">";
}


// Form
    function FormValidation() {
        var firstname = document.forms["feedbackform"]["fname"].value;
        var lastname = document.forms["feedbackform"]["lname"].value;
        var mobilenumber = document.forms["feedbackform"]["mobilenumber"].value;
        var email = document.forms["feedbackform"]["email"].value;
        var message = document.forms["feedbackform"]["message"].value;
      
        if (firstname == "" || lastname == "" || mobilenumber == "" || email == "" || message == "") {
            alert("please fill the form correctly!");
        } else {

            alert("Thank you for your feedback 🙂");
             // Clear the form
            document.forms["feedbackform"].reset();
        }
    }
//product image tooggle
function setNewImage()
{
    document.getElementById("img1").src="../Image/camera1000.jpg";
}
function setOldImage()
{
    document.getElementById("img1").src="../Image/camera100.jpg";
}
