(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{522:function(module){eval('module.exports = {"contractName":"IERC1155TokenReceiver","abi":[{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_from","type":"address"},{"name":"_id","type":"uint256"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_from","type":"address"},{"name":"_ids","type":"uint256[]"},{"name":"_values","type":"uint256[]"},{"name":"_data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x","deployedBytecode":"0x","sourceMap":"","deployedSourceMap":"","source":"pragma solidity ^0.5.0;\\n\\ninterface IERC1155TokenReceiver {\\n    /**\\n        @notice Handle the receipt of a single ERC1155 token type\\n        @dev The smart contract calls this function on the recipient\\n        after a `safeTransferFrom`. This function MAY throw to revert and reject the\\n        transfer. Return of other than the magic value MUST result in the\\n        transaction being reverted\\n        Note: the contract address is always the message sender\\n        @param _operator  The address which called `safeTransferFrom` function\\n        @param _from      The address which previously owned the token\\n        @param _id        An array containing the ids of the token being transferred\\n        @param _value     An array containing the amount of tokens being transferred\\n        @param _data      Additional data with no specified format\\n        @return           `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`\\n    */\\n    function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4);\\n\\n    /**\\n        @notice Handle the receipt of multiple ERC1155 token types\\n        @dev The smart contract calls this function on the recipient\\n        after a `safeTransferFrom`. This function MAY throw to revert and reject the\\n        transfer. Return of other than the magic value MUST result in the\\n        transaction being reverted\\n        Note: the contract address is always the message sender\\n        @param _operator  The address which called `safeTransferFrom` function\\n        @param _from      The address which previously owned the token\\n        @param _ids       An array containing ids of each token being transferred\\n        @param _values    An array containing amounts of each token being transferred\\n        @param _data      Additional data with no specified format\\n        @return           `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`\\n    */\\n    function onERC1155BatchReceived(address _operator, address _from, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external returns(bytes4);\\n}\\n","sourcePath":"erc-1155/contracts/IERC1155TokenReceiver.sol","ast":{"absolutePath":"erc-1155/contracts/IERC1155TokenReceiver.sol","exportedSymbols":{"IERC1155TokenReceiver":[5065]},"id":5066,"nodeType":"SourceUnit","nodes":[{"id":5032,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:15"},{"baseContracts":[],"contractDependencies":[],"contractKind":"interface","documentation":null,"fullyImplemented":false,"id":5065,"linearizedBaseContracts":[5065],"name":"IERC1155TokenReceiver","nodeType":"ContractDefinition","nodes":[{"body":null,"documentation":"@notice Handle the receipt of a single ERC1155 token type\\n@dev The smart contract calls this function on the recipient\\nafter a `safeTransferFrom`. This function MAY throw to revert and reject the\\ntransfer. Return of other than the magic value MUST result in the\\ntransaction being reverted\\nNote: the contract address is always the message sender\\n@param _operator  The address which called `safeTransferFrom` function\\n@param _from      The address which previously owned the token\\n@param _id        An array containing the ids of the token being transferred\\n@param _value     An array containing the amount of tokens being transferred\\n@param _data      Additional data with no specified format\\n@return           `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`","id":5047,"implemented":false,"kind":"function","modifiers":[],"name":"onERC1155Received","nodeType":"FunctionDefinition","parameters":{"id":5043,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5034,"name":"_operator","nodeType":"VariableDeclaration","scope":5047,"src":"991:17:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5033,"name":"address","nodeType":"ElementaryTypeName","src":"991:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5036,"name":"_from","nodeType":"VariableDeclaration","scope":5047,"src":"1010:13:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5035,"name":"address","nodeType":"ElementaryTypeName","src":"1010:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5038,"name":"_id","nodeType":"VariableDeclaration","scope":5047,"src":"1025:11:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5037,"name":"uint256","nodeType":"ElementaryTypeName","src":"1025:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5040,"name":"_value","nodeType":"VariableDeclaration","scope":5047,"src":"1038:14:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5039,"name":"uint256","nodeType":"ElementaryTypeName","src":"1038:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5042,"name":"_data","nodeType":"VariableDeclaration","scope":5047,"src":"1054:20:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_bytes_calldata_ptr","typeString":"bytes"},"typeName":{"id":5041,"name":"bytes","nodeType":"ElementaryTypeName","src":"1054:5:15","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"src":"990:85:15"},"returnParameters":{"id":5046,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5045,"name":"","nodeType":"VariableDeclaration","scope":5047,"src":"1093:6:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"},"typeName":{"id":5044,"name":"bytes4","nodeType":"ElementaryTypeName","src":"1093:6:15","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"}},"value":null,"visibility":"internal"}],"src":"1092:8:15"},"scope":5065,"src":"964:137:15","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":null,"documentation":"@notice Handle the receipt of multiple ERC1155 token types\\n@dev The smart contract calls this function on the recipient\\nafter a `safeTransferFrom`. This function MAY throw to revert and reject the\\ntransfer. Return of other than the magic value MUST result in the\\ntransaction being reverted\\nNote: the contract address is always the message sender\\n@param _operator  The address which called `safeTransferFrom` function\\n@param _from      The address which previously owned the token\\n@param _ids       An array containing ids of each token being transferred\\n@param _values    An array containing amounts of each token being transferred\\n@param _data      Additional data with no specified format\\n@return           `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`","id":5064,"implemented":false,"kind":"function","modifiers":[],"name":"onERC1155BatchReceived","nodeType":"FunctionDefinition","parameters":{"id":5060,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5049,"name":"_operator","nodeType":"VariableDeclaration","scope":5064,"src":"2039:17:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5048,"name":"address","nodeType":"ElementaryTypeName","src":"2039:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5051,"name":"_from","nodeType":"VariableDeclaration","scope":5064,"src":"2058:13:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5050,"name":"address","nodeType":"ElementaryTypeName","src":"2058:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5054,"name":"_ids","nodeType":"VariableDeclaration","scope":5064,"src":"2073:23:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_calldata_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":5052,"name":"uint256","nodeType":"ElementaryTypeName","src":"2073:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":5053,"length":null,"nodeType":"ArrayTypeName","src":"2073:9:15","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":5057,"name":"_values","nodeType":"VariableDeclaration","scope":5064,"src":"2098:26:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_calldata_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":5055,"name":"uint256","nodeType":"ElementaryTypeName","src":"2098:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":5056,"length":null,"nodeType":"ArrayTypeName","src":"2098:9:15","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":5059,"name":"_data","nodeType":"VariableDeclaration","scope":5064,"src":"2126:20:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_bytes_calldata_ptr","typeString":"bytes"},"typeName":{"id":5058,"name":"bytes","nodeType":"ElementaryTypeName","src":"2126:5:15","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"src":"2038:109:15"},"returnParameters":{"id":5063,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5062,"name":"","nodeType":"VariableDeclaration","scope":5064,"src":"2165:6:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"},"typeName":{"id":5061,"name":"bytes4","nodeType":"ElementaryTypeName","src":"2165:6:15","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"}},"value":null,"visibility":"internal"}],"src":"2164:8:15"},"scope":5065,"src":"2007:166:15","stateMutability":"nonpayable","superFunction":null,"visibility":"external"}],"scope":5066,"src":"25:2150:15"}],"src":"0:2176:15"},"legacyAST":{"absolutePath":"erc-1155/contracts/IERC1155TokenReceiver.sol","exportedSymbols":{"IERC1155TokenReceiver":[5065]},"id":5066,"nodeType":"SourceUnit","nodes":[{"id":5032,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:15"},{"baseContracts":[],"contractDependencies":[],"contractKind":"interface","documentation":null,"fullyImplemented":false,"id":5065,"linearizedBaseContracts":[5065],"name":"IERC1155TokenReceiver","nodeType":"ContractDefinition","nodes":[{"body":null,"documentation":"@notice Handle the receipt of a single ERC1155 token type\\n@dev The smart contract calls this function on the recipient\\nafter a `safeTransferFrom`. This function MAY throw to revert and reject the\\ntransfer. Return of other than the magic value MUST result in the\\ntransaction being reverted\\nNote: the contract address is always the message sender\\n@param _operator  The address which called `safeTransferFrom` function\\n@param _from      The address which previously owned the token\\n@param _id        An array containing the ids of the token being transferred\\n@param _value     An array containing the amount of tokens being transferred\\n@param _data      Additional data with no specified format\\n@return           `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`","id":5047,"implemented":false,"kind":"function","modifiers":[],"name":"onERC1155Received","nodeType":"FunctionDefinition","parameters":{"id":5043,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5034,"name":"_operator","nodeType":"VariableDeclaration","scope":5047,"src":"991:17:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5033,"name":"address","nodeType":"ElementaryTypeName","src":"991:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5036,"name":"_from","nodeType":"VariableDeclaration","scope":5047,"src":"1010:13:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5035,"name":"address","nodeType":"ElementaryTypeName","src":"1010:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5038,"name":"_id","nodeType":"VariableDeclaration","scope":5047,"src":"1025:11:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5037,"name":"uint256","nodeType":"ElementaryTypeName","src":"1025:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5040,"name":"_value","nodeType":"VariableDeclaration","scope":5047,"src":"1038:14:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":5039,"name":"uint256","nodeType":"ElementaryTypeName","src":"1038:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":5042,"name":"_data","nodeType":"VariableDeclaration","scope":5047,"src":"1054:20:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_bytes_calldata_ptr","typeString":"bytes"},"typeName":{"id":5041,"name":"bytes","nodeType":"ElementaryTypeName","src":"1054:5:15","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"src":"990:85:15"},"returnParameters":{"id":5046,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5045,"name":"","nodeType":"VariableDeclaration","scope":5047,"src":"1093:6:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"},"typeName":{"id":5044,"name":"bytes4","nodeType":"ElementaryTypeName","src":"1093:6:15","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"}},"value":null,"visibility":"internal"}],"src":"1092:8:15"},"scope":5065,"src":"964:137:15","stateMutability":"nonpayable","superFunction":null,"visibility":"external"},{"body":null,"documentation":"@notice Handle the receipt of multiple ERC1155 token types\\n@dev The smart contract calls this function on the recipient\\nafter a `safeTransferFrom`. This function MAY throw to revert and reject the\\ntransfer. Return of other than the magic value MUST result in the\\ntransaction being reverted\\nNote: the contract address is always the message sender\\n@param _operator  The address which called `safeTransferFrom` function\\n@param _from      The address which previously owned the token\\n@param _ids       An array containing ids of each token being transferred\\n@param _values    An array containing amounts of each token being transferred\\n@param _data      Additional data with no specified format\\n@return           `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`","id":5064,"implemented":false,"kind":"function","modifiers":[],"name":"onERC1155BatchReceived","nodeType":"FunctionDefinition","parameters":{"id":5060,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5049,"name":"_operator","nodeType":"VariableDeclaration","scope":5064,"src":"2039:17:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5048,"name":"address","nodeType":"ElementaryTypeName","src":"2039:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5051,"name":"_from","nodeType":"VariableDeclaration","scope":5064,"src":"2058:13:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5050,"name":"address","nodeType":"ElementaryTypeName","src":"2058:7:15","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":5054,"name":"_ids","nodeType":"VariableDeclaration","scope":5064,"src":"2073:23:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_calldata_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":5052,"name":"uint256","nodeType":"ElementaryTypeName","src":"2073:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":5053,"length":null,"nodeType":"ArrayTypeName","src":"2073:9:15","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":5057,"name":"_values","nodeType":"VariableDeclaration","scope":5064,"src":"2098:26:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_calldata_ptr","typeString":"uint256[]"},"typeName":{"baseType":{"id":5055,"name":"uint256","nodeType":"ElementaryTypeName","src":"2098:7:15","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":5056,"length":null,"nodeType":"ArrayTypeName","src":"2098:9:15","typeDescriptions":{"typeIdentifier":"t_array$_t_uint256_$dyn_storage_ptr","typeString":"uint256[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":5059,"name":"_data","nodeType":"VariableDeclaration","scope":5064,"src":"2126:20:15","stateVariable":false,"storageLocation":"calldata","typeDescriptions":{"typeIdentifier":"t_bytes_calldata_ptr","typeString":"bytes"},"typeName":{"id":5058,"name":"bytes","nodeType":"ElementaryTypeName","src":"2126:5:15","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"src":"2038:109:15"},"returnParameters":{"id":5063,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5062,"name":"","nodeType":"VariableDeclaration","scope":5064,"src":"2165:6:15","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"},"typeName":{"id":5061,"name":"bytes4","nodeType":"ElementaryTypeName","src":"2165:6:15","typeDescriptions":{"typeIdentifier":"t_bytes4","typeString":"bytes4"}},"value":null,"visibility":"internal"}],"src":"2164:8:15"},"scope":5065,"src":"2007:166:15","stateMutability":"nonpayable","superFunction":null,"visibility":"external"}],"scope":5066,"src":"25:2150:15"}],"src":"0:2176:15"},"compiler":{"name":"solc","version":"0.5.1+commit.c8a2cb62.Emscripten.clang"},"networks":{},"schemaVersion":"3.0.1","updatedAt":"2019-03-05T13:15:20.331Z","devdoc":{"methods":{"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)":{"details":"The smart contract calls this function on the recipient after a `safeTransferFrom`. This function MAY throw to revert and reject the transfer. Return of other than the magic value MUST result in the transaction being reverted Note: the contract address is always the message sender","params":{"_data":"Additional data with no specified format","_from":"The address which previously owned the token","_ids":"An array containing ids of each token being transferred","_operator":"The address which called `safeTransferFrom` function","_values":"An array containing amounts of each token being transferred"},"return":"`bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`"},"onERC1155Received(address,address,uint256,uint256,bytes)":{"details":"The smart contract calls this function on the recipient after a `safeTransferFrom`. This function MAY throw to revert and reject the transfer. Return of other than the magic value MUST result in the transaction being reverted Note: the contract address is always the message sender","params":{"_data":"Additional data with no specified format","_from":"The address which previously owned the token","_id":"An array containing the ids of the token being transferred","_operator":"The address which called `safeTransferFrom` function","_value":"An array containing the amount of tokens being transferred"},"return":"`bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`"}}},"userdoc":{"methods":{"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)":{"notice":"Handle the receipt of multiple ERC1155 token types"},"onERC1155Received(address,address,uint256,uint256,bytes)":{"notice":"Handle the receipt of a single ERC1155 token type"}}}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI1MjIuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///522\n')}}]);