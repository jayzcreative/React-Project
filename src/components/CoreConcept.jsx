export default function CoreConcept(props){
  return(
<li class="flex flex-col items-center text-center w-64 p-4 transition-all hover:scale-105">
   <img src={props.image} alt={props.description} />
   <h1>{props.title}</h1>
  <p>{props.description}</p>
</li>
  );
  {/*You can also do this 
    function CoreConcept({image,title,description}){
  return(
<li class="flex flex-col items-center text-center w-64 p-4 transition-all hover:scale-105">
   <img src={image} alt={description} />
   <h1>{title}</h1>
  <p>{description}</p>
</li>
  );
    */ }
}