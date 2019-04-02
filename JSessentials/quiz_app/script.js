/*
let quizController = (function() {
    let private = 10;
    let privateFn = function(a) {
        return a + private;
    }

    return {
        publicMethod: function() {
            return privateFn(20);
        }
    }
})();
// quizController.publicMethod()               // 30

let UIController = (function() {

    let num1 = 30;

    return {
        sum: function(num2) {
            return num1 + num2;
        }
    }

})();


let controller = (function(quizCtrl, UICtrl) {

    console.log(UICtrl.sum(100) + quizCtrl.publicMethod());               // 130+30=160

})(quizController, UIController);
*/

/**************************************
 ********* quiz controller ***********
 **************************************/

let quizController = (function() {
    /*
    localStorage.setItem('data', JSON.stringify([1, 2, 3, 4]));
    localStorage.setItem('data', JSON.stringify({name: 'John'})); //
    // console.log(typeof localStorage.getItem('data'));          // string
    localStorage.removeItem('data');
    console.log(JSON.parse(localStorage.getItem('data')));       
    // [object Array]: [1, 2, 3, 4] => [object Object]: {name: "John"} => null
    */
    
    //********** question constructor **********/
    function Question(id, questionText, options, correctAnswer) {
        this.id = id;
        this.questionText = questionText;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    let questionLocalStorage = {
        setQuestionCollection: function(newCollection) {
            localStorage.setItem('questionCollection', JSON.stringify(newCollection));
        },
        getQuestionCollection: function() {
            return JSON.parse(localStorage.getItem('questionCollection'));
        },
        removeQuestionCollection: function() {
            localStorage.removeItem('questionCollection');
        }
    };

    return {
        addQuestionOnLocalStorage: function(newQuestText, opts) {
            let optionsArr, corrAns, qusetionId, newQuestion, getStoredQuests, isChecked;

            if (questionLocalStorage.getQuestionCollection() === null) {
                questionLocalStorage.setQuestionCollection([]);
            }

            optionsArr = [];

            isChecked = false;

            questionId = 0;

            for (let i = 0; i < opts.length; i++) {
                if (opts[i].value !== "") {
                    optionsArr.push(opts[i].value);
                }

                if (opts[i].previousElementSibling.checked && opts[i].value !== "") {
                    corrAns = opts[i].value;
                    isChecked = true;
                }
            }

            // [ {id: 0} {id: 1} ]

            if (questionLocalStorage.getQuestionCollection().length > 0) {
                questionId = questionLocalStorage.getQuestionCollection()[questionLocalStorage.getQuestionCollection().length - 1].id + 1;
            } else {
                questionId = 0;
            }


            if (newQuestText.value !== '') {
                if (optionsArr.length > 1) {
                    if (isChecked) {
                        newQuestion = new Question(qusetionId, newQuestText.value, optionsArr, corrAns);

                        getStoredQuests = questionLocalStorage.getQuestionCollection();
                        getStoredQuests.push(newQuestion);
                        questionLocalStorage.setQuestionCollection(getStoredQuests);

                        newQuestText.value = '';
                        for (let x = 0; x < opts.length; x++) {
                            opts[x].value = '';
                            opts[x].previousElementSibling.checked = false;
                        }

                        console.log(questionLocalStorage.getQuestionCollection());
                    } else {
                        alert('You missed to check the correct answer, or you checed the answer without value');
                    }

                } else {
                    alert('You should insert at least two options');
                }
                
            } else {
                alert('Please, insert question');
            }
            
        }
    };

})();
/**************************************
 ********* UI controller ***********
 **************************************/
let UIController = (function() {

    let domItems = {
        //************** Admin Panel Elements ************** */
        questionInsertBtn: document.getElementById("question-insert-btn"),
        newQuestionText: document.getElementById("new-question-text"),
        adminOptions: document.querySelectorAll(".admin-option"),
        adminOptionsContainer: document.querySelector(".admin-options-container")
    };

    return {
        getDomItems: domItems,

        addInputsDynamically: function() {

            let addInput = function() {
                
                let inputHTML, z;

                z = document.querySelectorAll('.admin-option').length;

                inputHTML = '<div class="admin-option-wrapper"><input type="radio" class="admin-option-' + z +'" name="answer" value="1"><input type="text" class="admin-option admin-option-' + z +'" value=""></div>'
        
                // https://developer.mozilla.org/en-US/docs/Web/API/Eement/insertAdjacentHTML
                domItems.adminOptionsContainer.insertAdjacentElement('beforeend', inputHTML);

                domItems.adminOptionsContainer.lastElementChild.previousElementSibling.lastElementChild.removeEventListener('focus', addInput);
                
                domItems.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', addInput);
                
            }
            
            domItems.adminOptionsContainer.lastElementChild.lastElementChild.addEventListener('focus', addInput);
        },
    };

})();
/**************************************
 ********* controller ***********
 **************************************/

let controller = (function(quizCtrl, UICtrl) {

    let selectedDomItems = UICtrl.getDomItems;

    UICtrl.addInputsDynamically();

    UICtrl.getDomItems.questionInsertBtn.addEventListener('click', function() {
        // console.log('Works');
        let adminOptions = document.querySelectorAll('.admin-option');

        quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, adminOptions);
    });

})(quizController, UIController);








































