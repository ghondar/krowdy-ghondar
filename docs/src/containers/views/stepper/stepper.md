# Stepper

<p class="description">Stepepr</p>

{{"demo": "containers/views/stepper/stepper.js", "hideHeader": false, "bg": true, "bgColor": "white" }}

| Name        | Type            | Default | Description                                               |
| :--------   | :------         | :-----: | :--------------------------------------------             |
| steps       | {_id, label}[]  |  false  | el array a recorrer                                       |
| orientation | string          |         |                                                           |
| activeIndex | number          |         | step activado                                             |
| onChange    | Function        |         | para manejar cambio                                       |
| clickable   | boolean         |         | para determinar si es clickeable                          |
| isCompleted | boolean         |         | para validar si todo esta completo                        |
| height      | number          |         | para definir una altura                                   |
| spacing     | number          |         | spacing vertical entre steps                              |
| absolute    | boolean         |         | para indicar q se use el modo absolute en modo horizontal |

