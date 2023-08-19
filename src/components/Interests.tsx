import React, {useState} from "react";
import { Bar } from "react-chartjs-2";

interface Option {
    label: string;
    value: string;
}

const options: Option[] = [
    {label: 'Opcion 1', value: 'Opcion 1'},
    {label: 'Opcion 2', value: 'Opcion 2'},
    {label: 'Opcion 3', value: 'Opcion 3'},
]

const Interests: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value)
    }

    const getChartData = () => {

        const data = {
            labels: options.map(option => option.label),
            datasets: [
                {
                    label: 'Votos',
                    data: options.map(()=> Math.floor(Math.random()*100)),
                    backgroundcolor: 'rgba(75,192,192,0.6)',
                },
            ],
        };

        return data;
    }

  return (
    <>
        <div className="interest-container">
            <h3>¿Qué idiomas te interesa aprender en la lengua de señas?</h3>
            <select name="interes" id="interes" onChange={handleOptionChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>

            { selectedOption && (
                    <div>
                        <h4>Opcion Escogda: {options.find(option => option.value = selectedOption)?.label} </h4>
                        <Bar data={getChartData()} />
                    </div>
                )
            }

            <p>Nuestro objetivo es ampliar los crusos en lengua de señas en otros idiomas</p>
        </div>
    </>
  )
}

export default Interests