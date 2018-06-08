class Complaint {
  constructor () {
    this.complainingParty = ''
    this.complaintAbout = ''
    this.complaint = ''
  }
}

class ClerkOfTheCourt {
  isAbleToResolveComplaint (complaint) {
    return false
  }

  listenToComplaint (complaint) {
    // Perform some operation
    // return solution to the complaint
    return ''
  }
}

class King {
  isAbleToResolveComplaint (complaint) {
    return true
  }

  listenToComplaint (complaint) {
    return ''
  }
}

class ComplaintResolver {
  constructor () {
    this.complaintListeners = []
    this.complaintListeners.push(new ClerkOfTheCourt())
    this.complaintListeners.push(new King())
  }

  resolveComplaint (complaint) {
    for (let i = 0, len = this.complaintListeners.length; i < len; i += 1) {
      if (this.complaintListeners[i].isAbleToResolveComplaint) {
        return this.complaintListeners[i].listenToComplaint(complaint)
      }
    }
  }
}
