const Title=document.getElementById("Title");
const Desc=document.getElementById("Deciption");
const List=document.getElementById("List");
const Submit=document.getElementById("submit");

const TodoArray=[
    {title:"ali",desc:"19"},
    {title:"reza",desc:"22"}
];

const NewTodo=()=>
{
    for(let i=0; i<TodoArray.length; i++)
    {
        const ListItem=document.createElement("li");
        const ListTitle=document.createElement("h2");
        ListTitle.innerText=TodoArray[i].title;
        const ListText=document.createElement("p");
        ListText.innerText=TodoArray[i].desc;
        ListItem.appendChild(ListTitle);
        ListItem.appendChild(ListText);
        List.appendChild(ListItem);
    }
}

NewTodo();

Submit.addEventListener("click",(e)=>
{
    e.preventDefault();
    const ListTodo={
        title:Title.value,
        desc:Desc.value
    };
    TodoArray.push(ListTodo);
    List.innerHTML="";
    NewTodo();
})