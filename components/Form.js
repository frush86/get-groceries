import styled from "styled-components";

export default function Form({ addProduct }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addProduct(data);
    event.target.reset();
    event.target.elements.name.blur();
  }

  function handleFocus() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        id="product"
        name="name"
        placeholder="We need..."
        required
        onFocus={handleFocus}
      />
      <StyledButton type="submit">+</StyledButton>
    </form>
  );
}

const StyledInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border: solid 1px;
  border-color: white;
  outline: none;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: white;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: solid 1px;
  border-color: white;
`;
