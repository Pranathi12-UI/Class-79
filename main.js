names_array=[]

function submit()
{

    var name_1 = document.getElementById("name_of_people_1").value;
    var name_2 = document.getElementById("name_of_people_2").value;
    var name_3 = document.getElementById("name_of_people_3").value;
    var name_4 = document.getElementById("name_of_people_4").value;

    names_array.push(name_1);
    names_array.push(name_2);
    names_array.push(name_3);
    names_array.push(name_4);

    console.log(names_array);

    document.getElementById("display_name").innerHTML = names_array;
    document.getElementById("submit_button").style.display ="none";
    document.getElementById("sort_button").style.display ="inline-block";

}

function sorting()
{
    names_array.sort();
    console.log(names_array);
    document.getElementById("display_name").innerHTML = names_array;
}