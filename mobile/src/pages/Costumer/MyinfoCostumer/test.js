<View style={{backgroundColor: '#f1f1f1', flexDirection: "column"}}>
      {/* <Header /> */}
      <Container>
          <Text
            style={{color: '#222'}}>User name</Text>
      </Container>

      <Container
        
          onPress={handleNavigateToPoints}>
          <Icon 
            name='ellipse-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>My collected points</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />


        <TouchableOpacity
          onPress={handleNavigateToCoupon}>
          <Icon 
            name='ellipse-outline'
             //albums-outline
            color={'#232D42'}
            size={26}
          />
            <Text>Coupon</Text>
            <Icon 
              name='chevron-forward-outline'
             
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
    
        <TouchableOpacity
          onPress={handleNavigateToWallet}>

          <Icon 
            name='wallet'
            color={'#232D42'}
            size={26}
          />
            <Text>My Wallet</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
      </Container>

      <Container>
        <TouchableOpacity
          onPress={handleNavigateToSettings}>

          <Icon 
            name='settings-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>Settings</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToHelp}>

          <Icon 
            name='help-circle-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>Help Centre</Text>
            <Icon 
              name='chevron-forward-outline'

              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToAboutUs}>

          <Icon 
            name='information-circle-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>About us</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
      </Container>

      <TouchableOpacity
        style={{borderRadius: 35, borderColor: '#FB5656', backgroundColor: '#FB33'}}
        onPress={handleNavigateToLogout}
      >

          <Icon 
            name='information-circle-outline'
            color={'#232D42'}
            size={26}
          />
          <Text>Log out</Text>

      </TouchableOpacity>

    </View>
  
