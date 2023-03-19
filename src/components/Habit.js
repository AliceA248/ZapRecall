import styled from 'styled-components';
import axios from 'axios';
import trash from '../img/Trash.png';

const weekdays = [
	'Domingo',
	'Segunda-feira',
	'Terça-feira',
	'Quarta-feira',
	'Quinta-feira',
	'Sexta-feira',
	'Sábado',
];

	export default function Habit({ habit, onHabitDelete }) {
		const token = localStorage.getItem('Token');
		const [isDeleting, setIsDeleting] = useState(false);
	  
		function handleDeleteHabit() {
		  setIsDeleting(true);
		  const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
		  const config = {
			headers: {
			  Authorization: `Bearer ${token}`
			}
		  };
		  axios
			.delete(url, config)
			.then(() => {
			  setIsDeleting(false);
			  onHabitDelete(habit.id);
			})
			.catch(() => {
			  setIsDeleting(false);
			  alert('Não foi possível excluir o hábito. Tente novamente mais tarde.');
			});
		}
	  
		return (
		  <HabitCard>
			<HabitName>{habit.name}</HabitName>
			<div>
			  {weekdays.map((weekday, index) => (
				<DaysButton
				  key={index}
				  selected={habit.days.includes(index)}
				>
				  {weekday.slice(0, 3)}
				</DaysButton>
			  ))}
			  <DeleteButton
				src={trash}
				alt="Excluir hábito"
				onClick={handleDeleteHabit}
				disabled={isDeleting}
			  />
			</div>
		  </HabitCard>
		);
	  }

const HabitCard = styled.div`
	width: 340px;
	height: 91px;
	background-color: #ffffff;
	margin-top: 10px;
	border-radius: 5px;
	position: relative;
	p {
		font-size: 20px;
		margin-left: 15px;
		padding-top: 13px;
		color: #666666;
	}
	div {
		margin-left: 14px;
		margin-top: 8px;
	}
	img {
		position: absolute;
		top: 11px;
		right: 10px;
		cursor: pointer;
	}
`;

const DaysButton = styled.button`
	margin-right: 4px;
	width: 30px;
	height: 30px;
	border: 1px solid #d5d5d5;
	border-radius: 5px;
	background-color: ${(props) =>
		props.selected === true ? '#CFCFCF' : '#FFFFFF'};
	color: ${(props) => (props.selected === true ? '#FFFFFF' : '#DBDBDB')};
	font-size: 20px;
`;