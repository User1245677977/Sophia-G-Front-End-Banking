import React, { useContext } from 'react';
import UserContext from './UserContext'; // Adjust the import based on the actual path

const alldata = () => {
  const ctx = useContext(UserContext);
  return (
    <>
      <h5>all data in Store</h5>
      {JSON.stringify(ctx)}<br/>
    </>
  );
};
  document.addEventListener('DOMContentLoaded', function () {
    // Create and append the stylesheet link for Bootstrap
    let link = document.createElement('link');
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/5.2.1/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.integrity = 'sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  
    // Create style tag for custom styles
    let style = document.createElement('style');
    style.innerHTML = `
      .card {
        margin-bottom: 20px;
      }
    `;
    document.head.appendChild(style);
  
    // Create container div
    let container = document.createElement('div');
    container.className = 'container';
  
    // Create heading element
    let heading = document.createElement('h1');
    heading.className = 'mt-5 mb-4';
    heading.innerText = 'all data';
  
    // Append heading to container
    container.appendChild(heading);
  
    // Create user submissions container
    let userSubmissions = document.createElement('div');
    userSubmissions.id = 'userSubmissions';
  
    // Append user submissions to container
    container.appendChild(userSubmissions);
  
    // Example data (can be fetched dynamically)
    let submissions = [
      {
        title: 'Submission #1',
        submittedOn: 'July 16, 2024',
        data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        title: 'Submission #2',
        submittedOn: 'July 15, 2024',
        data: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ];
  
    // Create cards dynamically
    submissions.forEach((submission, index) => {
      let card = document.createElement('div');
      card.className = 'card';
  
      let cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      let cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.innerText = submission.title;
  
      let submittedOn = document.createElement('p');
      submittedOn.className = 'card-text';
      submittedOn.innerText = 'Submitted on: ' + submission.submittedOn;
  
      let data = document.createElement('p');
      data.className = 'card-text';
      data.innerText = 'Data: ' + submission.data;
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(submittedOn);
      cardBody.appendChild(data);
  
      card.appendChild(cardBody);
  
      userSubmissions.appendChild(card);
    });
  
    // Append container to body
    document.body.appendChild(container);
  
    // Load Bootstrap JS
    let bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/5.2.1/js/bootstrap.bundle.min.js';
    bootstrapScript.integrity = 'sha384-4m3IFaKc5sY5CjH/TaPfmgWc5CZOEP4I1c4nVJ2kRmAg4+BM8hoPb5fVI4ZD+XfF';
    bootstrapScript.crossOrigin = 'anonymous';
    document.body.appendChild(bootstrapScript);
  });
  