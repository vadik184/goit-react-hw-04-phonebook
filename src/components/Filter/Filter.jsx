import { StyledFormLabel, StyledFormIput } from 'components/Form/FormStyle';
import {
  StyledFilterContainer,
  StyledFilterText,
} from 'components/Filter/FilterStyle';
export const Filter = ({ filter, onChageFilter }) => {
  return (
    <StyledFilterContainer>
      <StyledFilterText>Find contacts dy name</StyledFilterText>
      <StyledFormLabel>
        <StyledFormIput
          type="text"
          value={filter}
          onChange={onChageFilter}
          style={{
            marginTop: '15px',
            width: '200px',
          }}
        />
      </StyledFormLabel>
    </StyledFilterContainer>
  );
};
