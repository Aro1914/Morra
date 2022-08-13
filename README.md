# Morra

This is a smart contract built with Reach that implements the business logic of the friendly game of Morra.  

## Setup

- You must have WSL installed in your computer and Docker working too, to be able to run the containerized application successfully.  
Follow the very comprehensive guide on how to get this done in the Quickstart section of the [Reach Docs](https://docs.reach.sh/quickstart/#quickstart).
- You should have a TestNet connected to your MetaMask Wallet, or instead use MyAlgo Wallet it spins a wallet in TestNet for you.  

## Usage

To run the app, on your terminal, after you have downloaded Reach through the setup, run the following commands to lauch the application and contract:

```shell
$ <path to your Reach file>/reach react
```

To set your TestNet before the run, use the following command:

```shell
$ REACH_CONNECTOR_MODE=<The TestNet name> <path to your Reach file>/reach react
```

The supported options are ETH, ALGO, CFX, for the Ethereum, Algorand, and Conflux TestNets respectively.

## Gameplay

To enjoy this game, its best to open the app in two browser tabs, one for Alice (the Deployer) and one for Bob (the Attacher).

### Launch the Game

![Screenshot (439)](https://user-images.githubusercontent.com/68448315/184478508-d9278d1e-0617-4398-a90f-0a43e32b4031.png)  

### Connect to your account

![Screenshot (440)](https://user-images.githubusercontent.com/68448315/184478509-6da51af9-c22d-44b6-837c-ebf1860f6036.png)  

![Screenshot (441)](https://user-images.githubusercontent.com/68448315/184478510-0aafa2f5-6483-4fb2-9911-a49e960cc67f.png)  

![Screenshot (442)](https://user-images.githubusercontent.com/68448315/184478512-3528bae2-2b69-4bfd-b190-040a9bb6fb3c.png)  

### Optionally fund your account from a faucet or skip

![Screenshot (444)](https://user-images.githubusercontent.com/68448315/184478513-005c14a1-fabb-4e02-adec-a48ca7301117.png)  

![Screenshot (445)](https://user-images.githubusercontent.com/68448315/184478515-892b01a8-d5f0-4742-8800-68a606ee2689.png)  

### Select the roles

![Screenshot (446)](https://user-images.githubusercontent.com/68448315/184478516-82d6e600-d480-4c09-898d-45851729998e.png)  

![Screenshot (447)](https://user-images.githubusercontent.com/68448315/184478517-8a996235-dd7a-47ca-9bb2-d25e44d6bcd7.png)  

### As the Deployer, set the wager for the game and deploy

![Screenshot (448)](https://user-images.githubusercontent.com/68448315/184478518-702997f2-97a9-45d8-834a-3c1115919e6b.png)  

![Screenshot (449)](https://user-images.githubusercontent.com/68448315/184478519-73c3d8af-0225-4a30-ae86-fe8850274001.png)  

![Screenshot (450)](https://user-images.githubusercontent.com/68448315/184478520-17f01830-7e69-4e79-8a81-8ee1d97cac3f.png)  

![Screenshot (451)](https://user-images.githubusercontent.com/68448315/184478522-81c97dd2-4830-4cef-9411-a8cc93cf2ad8.png)  

![Screenshot (452)](https://user-images.githubusercontent.com/68448315/184478523-35d7c18d-4b0e-4bf4-9044-11d99c22530e.png)  

### Copy the contract info to the Attacher's form field to attach to the contract

![Screenshot (453)](https://user-images.githubusercontent.com/68448315/184478524-de5c2f1d-9935-4f7b-bf56-fd76c37eaeca.png)  

![Screenshot (454)](https://user-images.githubusercontent.com/68448315/184478525-4606a8f2-6242-4ea7-a8d8-1d8cea9b47ba.png)  

### The Attacher gets to review the terms of the contract

![Screenshot (455)](https://user-images.githubusercontent.com/68448315/184478526-f54ed51c-fd7a-42a1-8a82-e5f79709a05c.png)  

![Screenshot (456)](https://user-images.githubusercontent.com/68448315/184478528-c382a230-4ee1-4910-a9fa-98e314c33b91.png)  

![Screenshot (458)](https://user-images.githubusercontent.com/68448315/184478529-3947cd77-1ec5-4b1c-97ea-d9a83bd73255.png)  

### Upon attaching, Alice gets notified of the attachment and proceeds to play her turn

![Screenshot (459)](https://user-images.githubusercontent.com/68448315/184478531-712be77e-cdf8-4658-828c-28841195d11c.png)  

![Screenshot (460)](https://user-images.githubusercontent.com/68448315/184478532-b50a3b0a-25f7-4acc-a6a9-1dc791d0d053.png)  

![Screenshot (462)](https://user-images.githubusercontent.com/68448315/184478533-7de85329-3e38-448b-9bf8-93d0b946f5b4.png)  

### After Alice plays her turn, Bob gets to play his

![Screenshot (463)](https://user-images.githubusercontent.com/68448315/184478535-5611bcdd-1c07-4d50-920f-722f7f9fd87d.png)  

![Screenshot (464)](https://user-images.githubusercontent.com/68448315/184478537-302e4751-004b-4efd-a87d-cffc1917212c.png)  

### Both wait to see the outcome of the game

![Screenshot (465)](https://user-images.githubusercontent.com/68448315/184478538-909dbca1-0a3f-4859-9c61-5ab9ba9bec1c.png)  

### When a winner is discerned, the results is displayed to both participants

> **Note:** A winner is only decided when only one player guessed the total outcome right, if not **they will play again**.

![Screenshot (467)](https://user-images.githubusercontent.com/68448315/184478505-c7c203fe-59af-45d1-8e69-ca3969e56ff8.png)

For getting this far, I urge you to checkout the [Reach Docs](https://docs.reach.sh) and play around with building smart contract and DApps
