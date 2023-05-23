const Validation = (newActivity) => {

    const errors = {};
    const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!newActivity.name){
        errors.name = "Please, complete the activity's name";
    } else if(!regex.test(newActivity.name)){
        errors.name = "The name field only accepts letters an blank spaces";
    }

    if(!newActivity.difficulty){
        errors.difficulty = "Please, choose the activity's difficulty";
    }

    if(!newActivity.duration){
        errors.duration = "Please, choose the activity's duration";
    }

    if(!newActivity.season){
        errors.season = "Please, choose the activity's season";
    }

    if(newActivity.country.length < 1){
        errors.country = "Please, choose at least 1 country for the activity";
    }

    return errors;
}

export default Validation;