import styled from "styled-components";

export default function Form({ addProduct }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addProduct(data);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        id="product"
        name="name"
        placeholder="We need..."
        required
      />
      <button type="submit">+</button>
    </form>
  );
}

const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 10px;
  border: solid 1px;
  border-color: white;
  outline: none;
  &:focus {
    outline: none;
    border-color: white;
  }
`;
