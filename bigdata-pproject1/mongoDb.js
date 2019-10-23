//Creating db 
//use my_favorite_bank

//creating of workers
    var generateFname = function() {
        var collection = [
            'Jozik', 
            'Toskov', 
            'Putin', 
            'Mihail', 
            'Ivan', 
            'Serioja', 
            'Nikola', 
            'Vladimir', 
            'Anastasija',
            'Ekaterina'
        ];
      
        var index = Math.floor((Math.random() * (10 -1) + 1));

        return collection[index]
      }
      
      var generateLname = function() {
        var collection = [
            'Petrov', 
            'Ivanov', 
            'Jozik', 
            'Toskov', 
            'Putin', 
            'Kozareva', 
            'Velika', 
            'Mihail', 
            'Ivan', 
            'Serioja'
        ];
      
        var index = Math.floor(Math.random() * (10 - 1) + 1);
        return collection[index];
      }

    var generateMname = function () {
        var collection = [
            'Petrov', 
            'Ivanov', 
            'Jozik', 
            'Toskov', 
            'Putin', 
            'Kozareva', 
            'Velika', 
            'Mihail', 
            'Ivan', 
            'Serioja'
        ];
      
        var index = Math.floor(Math.random() * (10 - 1) + 1);

        if (index < 6) {
            middleName = collection[index];
        } else {
            middleName = " ";
        }
        return middleName;
      }

      var getAddresses = function() {
        var collection = [
            'пл. Централен № 1', 
            'Равнища № 2 А', 
            'Пещерско шосе № 30', 
            'ул. "Благовест" № 2-а', 
            'Димитър Талев № 49', 
            'Иван Вазов № 47 А',
            'Ландос № 14', 
            'ЖК Тракия бл. 202', 
            'Асеновградско шосе – КЦМ', 
            'бул.Македония 27-29'
        ];
        var index = Math.floor(Math.random() * (10 - 1) + 1);
        return collection[index];
      }

      var generatePhoneNumber = function() {
        var collection = [
            '123563256', 
            '7654566787', 
            '34543235', 
            '5463324553', 
            '35534785667', 
            '353677543', 
            '35367743255', 
            '2564553466', 
            '634353535', 
            '66634333455'
        ];
      
        var index = Math.floor(Math.random() * (10 - 1) + 1);
        return collection[index];
      }

      var GetPosition = function() {
        var position = null;
        var index = Math.floor(Math.random() * (10 - 1) + 1);

        if (index == 2) {
            position = "Глава на департамент";
        } 
        else if (index == 6) {
            position = "Глава на департамент";
        } 
        else {
            position = "редовен работник";
        }

        return position;
      }

      var getDepartmentOfWorker = function () {
        var collection = ['отдел на Операции', 'отдел на Кредитен Анализ'];
        var index = Math.floor(Math.random() * (3 - 1));

        return collection[index];
      }

      for(i = 0; i < 10; i++) {

        var middleName = null;
        var index = Math.floor(Math.random() * (10 - 1) + 1);

        if (index < 6) {
            middleName = generateMname();
        } else {
            middleName = " ";
        }

        db.workers.insert({
            first_name  : generateFname(),
            last_name : generateLname(),
            midle_name : middleName,
            address   : getAddresses(),
            number : generatePhoneNumber(),
            email : "test@email.com",
            position : GetPosition(),
            departmant : getDepartmentOfWorker(),

        })
      }

      //create clients 
      var generateBankAccount = function () {
            var bank_account = "account :" + Math.random().toString(36).substr(2, 9) + "abds" + ", " + "balance : " + "BGN " +  Math.floor(Math.random() * 100) + 1;

            return bank_account;
      }

      for(i = 0; i < 10; i++) {

        var account = null;

        if (i < 4) {
            account = [generateBankAccount(), generateBankAccount()];
        } 
        else {
            account = generateBankAccount();
        }

        db.clients.insert({
            first_name  : generateFname(),
            last_name : generateLname(),
            midle_name : generateMname(),
            address   : getAddresses(),
            number : generatePhoneNumber(),
            email : "test@email.com",
            bank_account : account
        })
      }
