-Wrapper- Parent

- Picture -> child
- / picture
- product Info -> child/parent
  -- title /
  -- price /
  -- description /
  -- add to cart btn /
- / productInfo
  -/ wrapper

[x]const StyledTopWrapper = styled.section` display: flex; flex-direction: row; // justify-content: space-between;`;

const StyledAddToCartBtn = styled.button` display: flex; color: #303030; border-radius: 2px; background-color: #f5db8b; width: 300px; align-text: center; margin: 1em; padding: 0.25em 1em; align-self: flex-end; justify content: end; curser: pointer; &:hover { opacity: 50%; transition: 100ms ease; } }`;

[x]const StyledSingleProductImg = styled.img` // display: flex; width: 350px; height: 400px; margin: 50px;`;

const StyledDescription = styled.p` display: flex; flx-direction: column; font-size: 14px; margin: 0 0 24px; line-height: 1.5em; letter-spacing: 1.5; width: 300px; align-self: flex-end;`;
const StyledProductInfo = styled.h1` margin: 0 0 24px; line-height: 1.5em; letter-spacing: 1.5; width: 300px; align-self: flex-end;`;
