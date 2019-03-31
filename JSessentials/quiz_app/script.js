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
    }

    return {
        addQuestionOnLocalStorage: function(newQuestText, opts) {
            let optionsArr, corrAns, qusetionId, newQuestion, getStoredQuests;

            if (questionLocalStorage.getQuestionCollection() === null) {
                questionLocalStorage.setQuestionCollection([]);
            }

            optionsArr = [];

            questionId = 0;

            for (let i = 0; i < opts.length; i++) {
                if (opts[i].value !== "") {
                    optionsArr.push(opts[i].value);
                }

                if (opts[i].previousElementSibling.checked && opts[i].value !== "") {
                    corrAns = opts[i].value;
                }
            }

            // [ {id: 0} {id: 1} ]

            if (questionLocalStorage.getQuestionCollection().length > 0) {
                questionId = questionLocalStorage.getQuestionCollection()[questionLocalStorage.getQuestionCollection().length - 1].id + 1;
            } else {
                questionId = 0;
            }

            newQuestion = new Question(qusetionId, newQuestText.value, optionsArr, corrAns);

            getStoredQuests = questionLocalStorage.getQuestionCollection();
            getStoredQuests.push(newQuestion);
            questionLocalStorage.setQuestionCollection(getStoredQuests);
            console.log(questionLocalStorage.getQuestionCollection());
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
        adminOptions: document.querySelectorAll(".admin-option")
    };

    return {
        getDomItems: domItems
    };

})();
/**************************************
 ********* controller ***********
 **************************************/

let controller = (function(quizCtrl, UICtrl) {

    let selectedDomItems = UICtrl.getDomItems;

    UICtrl.getDomItems.questionInsertBtn.addEventListener('click', function() {
        // console.log('Works');
        quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions);
    });

})(quizController, UIController);








































