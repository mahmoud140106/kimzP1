import Card from '../Card/Card';
const CardList =({namesList,deleteFunc})=> {
    const cards=namesList.map(({id, ...otherProps})=>(
       <Card key={id} deleteFunc={deleteFunc} {...otherProps} id={id}/>
    ))
  return(
      <div>{cards}</div>
  )
}
export default CardList;