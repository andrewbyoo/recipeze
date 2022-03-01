//Recipe Cards
import { Card, Button, Form } from 'react-bootstrap';

export default function recipeCard({ recipeId, recipeName, recipeLink, photoLink, loggedIn, recipeSaved }) {
  return (
    <Card data-recipeid={recipeId}>
      <Card.Title>{recipeName}</Card.Title>
      <Card.Img src={photoLink} alt={`${recipeName} photo`}/>
      <Card.Body>
        <Button href={(!recipeSaved) ? 'HREF for saving to user' : 'HREF for updating existing saved recipe'} className={(!loggedIn) ? 'invisible' : 'visible'}>Save</Button>
        <Button href={recipeLink} target='_blank'>Recipe Link</Button>
      </Card.Body>
      {/* <Form.Select className={(!loggedIn) ? 'invisible' : 'visible'}>
        <option>Day of the week</option>
        <option value={'Sunday'}>Sunday</option>
        <option value={'Monday'}>Monday</option>
        <option value={'Tuesday'}>Tuesday</option>
        <option value={'Wednesday'}>Wednesday</option>
        <option value={'Thursday'}>Thursday</option>
        <option value={'Friday'}>Friday</option>
        <option value={'Saturday'}>Saturday</option>
      </Form.Select> */}
    </Card>
  )
}
