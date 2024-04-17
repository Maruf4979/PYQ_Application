// Dummy data for filters and subjects
const filters = [
    { name: 'Year', options: ['2023', '2022', '2021'] },
    { name: 'Branch', options: ['Computer Science', 'Electronics and Communication', 'Electrical', 'Mechanical', 'Civil'] },
    { name: 'Exam', options: ['Mid sem', 'End Sem'] },
    { name: 'Status', options: ['Solved', 'Unsolved', 'Attempted'] }
];

const subjects = [
    { name: 'Linear Integrated Circuits', downloadLink: '#' },
    { name: 'Microprocessor and Interfacing', downloadLink: '#' },
    { name: 'Linear Control System', downloadLink: '#' },
    { name: 'Digital Communications', downloadLink: '#' }
];

// Function to create filter items
function createFilterItem(filter) {
    const filterDiv = document.createElement('div');
    filterDiv.textContent = filter.name;

    const checkboxes = filter.options.map(option => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = option;
        checkbox.id = `${filter.name}-${option.replace(/\s/g, '-')}`;

        const label = document.createElement('label');
        label.textContent = option;
        label.htmlFor = checkbox.id;

        const div = document.createElement('div');
        div.classList.add('filter-item');
        div.appendChild(checkbox);
        div.appendChild(label);

        return div;
    });

    filterDiv.append(...checkboxes);
    return filterDiv;
}

// Function to create subject items
function createSubjectItem(subject) {
    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = subject.name;

    const downloadBtn = document.createElement('button');
    downloadBtn.classList.add('download-btn');
    downloadBtn.textContent = 'Download';
    downloadBtn.onclick = () => {
        window.open(subject.downloadLink, '_blank');
    };

    subjectDiv.appendChild(nameSpan);
    subjectDiv.appendChild(downloadBtn);

    return subjectDiv;
}

// Render filters
const filtersContainer = document.getElementById('filters');
filters.forEach(filter => {
    const filterItem = createFilterItem(filter);
    filtersContainer.appendChild(filterItem);
});

// Render subjects
const subjectsContainer = document.getElementById('subjects');
subjects.forEach(subject => {
    const subjectItem = createSubjectItem(subject);
    subjectsContainer.appendChild(subjectItem);
});