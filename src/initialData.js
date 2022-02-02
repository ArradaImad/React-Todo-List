const initialData = {
    tasks: {
        'task-1': { id: 'task-1', title: 'Take out the garbage', description: 'Do not forget to replace the bags in the garbage can', load:'360' },
        'task-2': { id: 'task-2', title: 'Watch my favorite show', description: 'Pick another one at the end', load:'7200' },
        'task-3': { id: 'task-3', title: 'Charge my phone', description: 'Might need to change my phone', load:'10000' },
        'task-4': { id: 'task-4', title: 'Cook dinner', description: 'Update groceries list', load:'7800' },
        'task-5': { id: 'task-5', title: 'Take out the dog', description: 'Bring toys + leash', load:'600' },
        'task-6': { id: 'task-6', title: 'Watch my cat playing', description: 'Either piano or violin', load:'120' },
        'task-7': { id: 'task-7', title: 'Charge the Tesla', description: 'As if I could afford it', load:'36000' },
        'task-8': { id: 'task-8', title: 'Bake a cake', description: 'Gluten free + sugar free', load:'10800' },
    },
    columns: {
        'column-1': {
          id: 'column-1',
          title: 'To do',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: ['task-5', 'task-6'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Pending',
            taskIds: ['task-7'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Done',
            taskIds: ['task-8'],
        },
    },
      // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    };

export default initialData;